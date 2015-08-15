class Api::PostsController < ApplicationController
  def index
    @posts = Post.search( id: current_user.id, security_id: params[:security_id] )
    render json: @posts
  end

  def create
    @post = current_user.posts.new(post_params)

    if @post.save
      render json: @post
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  def destroy
    @post = Post.find(params[:id])
    @post.try(:destroy)
    render json: {};
  end

  private
  def post_params
    params.require(:post).permit(:user_id, :title, :tag, :note, :body)
  end
end
