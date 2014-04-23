json.array!(@mails) do |mail|
  json.extract! mail, :id, :from, :email, :to, :date, :subject, :text, :status
  json.url mail_url(mail, format: :json)
end
