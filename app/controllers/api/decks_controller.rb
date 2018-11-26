class Api::DecksController < ApplicationController
#   before_action :require_login

  def search 
    # debugger
    @decks = params[:str] === "" ? [] : Deck.all.select { |deck| deck.title.downcase.match(/#{params[:str]}/)}
    render :index 
  end  

  def create
    @deck = Deck.new(deck_params)
    @deck.creator_id = current_user.id

    if @deck.save
      render :show
    else
      render json: @deck.errors.full_messages, status: 422
    end
  end

  def index
    @decks = Deck.all
  end

  def show
    @deck = Deck.find(params[:id])

    if @deck
      render :show
    else
      render json: ['Deck not found'], status: 404
    end
  end

  def destroy
    @deck = Deck.find(params[:id])
    # if @deck
    #   if @deck.creator_id == current_user.id 
        @deck.destroy
        render :show
    #   else
    #     render json: ["Can't destroy unowned decks"], status: 401
    #   end
    # else
    #   render json: ['Deck not found'], status: 404
  # end
  end

  private

  def deck_params
    params.require(:deck).permit(:title)
  end
end
