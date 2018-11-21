class Api::CardsController < ApplicationController 
    # before_action :require_logged_in
    
    def index 
        @cards = Card.where(deck_id:params[:deck_id])
    end 

    def create
        @card = Card.new(card_params)
        @card.deck_id = params[:deck_id]
        # if @card.deck.creatorId = current_user.id 
            if @card.save
                render :show 
            else 
                render json: @card.errors.full_messages, status: 422 
            end 
        # else  
        #     render json: ['please choose a deck you own'], status: 401
        # end 
    end

    def show
        @card = Card.find(params[:id])
        if @card
            render :show 
        else  
            render json: ['unable to find card'], status: 404
        end 
    end

    def update
        @card = current_user.cards.find(params[:id])
        if @card
            if @card.update(card_params)
                render :show 
            else 
                render json: @cards.errors.full_messages
            end
        end 
    else 
        render json: ["cannot edit unowned cards"], status: 401  
    end
     
    def destroy
        @card = current_user.find(params[:id])
        if @card 
            @card.destroy 
            render :show 
        else 
            render json: ["cannot edit unowned cards"], status: 401
        end 
    end

    def card_params
        card_params.require(:card).permit(:front, :back)
    end   
end 