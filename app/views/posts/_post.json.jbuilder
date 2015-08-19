json.(post, :id, :title, :shared_with, :tags, :note, :body, :created_at)

if (post.user_id == current_user.id)
  json.set! :editable, true
end
