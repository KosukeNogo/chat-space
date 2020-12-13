class Group < ApplicationRecord
  has_many :group_users
  has_many :users, through: :group_users
  has_many :messages
  validates :name, presence: true, uniqueness: true

  def show_last_message
    # 変数last_messageに最新のメッセージを代入
    # https://techracho.bpsinc.jp/baba/2011_11_26/4724
    # .present?は!blank?を実行するメソッド
    # .blank?はnil? or empty?のようなメソッド。nilまたは空のオブジェクトを判定できる
    if (last_message = messages.last).present?
    # メッセージ有
      # メッセージが含まれていれば
      if last_message.content?
        last_message.content
      # メッセージが含まれていなくても画像があれば
      else
        '画像が投稿されています'
      end
    # メッセージ無
    else
      'まだメッセージはありません。'
    end
  end
end
