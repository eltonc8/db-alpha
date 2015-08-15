class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def create
    @post = current_user.posts.new(post_params)

    if @post.save
      render "/show.json"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def show
    @post = Post.find(params[:id])
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
