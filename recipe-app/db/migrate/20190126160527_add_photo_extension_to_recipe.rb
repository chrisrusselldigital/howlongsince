class AddPhotoExtensionToRecipe < ActiveRecord::Migration[5.2]
  def change
    add_column :recipes, :extension, :string
  end
end
