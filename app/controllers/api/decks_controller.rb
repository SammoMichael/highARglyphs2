class DecksController < ApplicationController 
    before_action :require_logged_in
    
    def index
        @decks = Deck.all.select(|deck| deck.creator_id = current_user.id)
    end
    
    def show
        @deck = Deck.find(params[:id])
        if @deck 
            render :show
        else
            render json: ['Unable to locate deck'], status: 404
        end 
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

    def destroy
        @deck = current_user.decks.find(params[:id])
        if @deck.destroy
            render :show
        else
            render json: ['cannot delete unowned decks']
        end
    end
    
    def deck_params
        deck_params.require(:deck).permit(:title)
    end            
end 