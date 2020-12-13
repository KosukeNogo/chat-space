class GroupsController < ApplicationController

  def index
  end
  
  def new
    @group = Group.new
    @group.users << current_user
  end

  def create
    @group = Group.new(group_params)
    if @group.save
      redirect_to root_path, notice: 'グループを作成しました'
    else
      render :new
    end
  end

  def edit
    @group = Group.find(params[:id])
  end

  def update
    @group = Group.find(params[:id])
    if @group.update(group_params)
      #redirect_to root_path, notice: 'グループを更新しました'
      #redirect_to back, notice: 'グループを更新しました'
      #redirect_to controller: :messages, action: :index, id: @group.id
      # グループのメッセージ一覧が表示されるパスはgroup_messages_path
      # このパスに編集中だったグループのidを渡せば良い。
      # 渡し方は二つある。一つはGroup.find(params[:id])をパスの引数とする方法。
      # もう一つは上記が代入された@groupを代入する方法。
      # https://pikawaka.com/rails/redirect_to
      redirect_to group_messages_path(Group.find(params[:id]))
    else
      render :edit
    end
  end

  private
  def group_params
    params.require(:group).permit(:name, user_ids: [])
  end

end
