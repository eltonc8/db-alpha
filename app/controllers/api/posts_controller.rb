class Api::PostsController < ApplicationController
  def index
    @posts = Post.search( id: current_user.id, security_id: params[:security_id] )
    render "posts/index.json"
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

  def update
    @post = current_user.posts.find(params[:id])
    debugger
    if @post && @post.update(post_params)
      render json: @post
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.try(:destroy)
    render json: {};
  end

  private
  def post_params
    post_params = params.require(:post).permit(:user_id, :title, :tag, :note, :body, :share_with)
    post_params[:share_with] ||= []
    post_params
  end
end
