json.(post, :id, :title, :shared_with, :tags, :body, :created_at)

json.author(post.user.username)

if (current_user && post.user_id == current_user.id)
  json.set! :editable, true
end
