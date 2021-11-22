import Column from "../column/Column";
import CreateAnnouncementForm from "../createAnnouncementForm/CreateAnnouncementForm";
import EditAnnouncementForm from "../editAnnouncementForm/EditAnnouncementForm";
import "./Board.css";

const Board = ({
  isFormVisible,
  isAdding,
  announcements,
  selectedCategory,
  createNewAnnouncement,
  captureTitle,
  captureText,
  captureCategory,
  categories,
  deleteAnnouncement,
  isEditing,
  setIsEditing,
  handleEditClick,
  handleEditTitleChange,
  handleEditTextChange,
  announcementToBeEdited,
  handleEditFormSubmit,
  handleEditCategory,
}) => {
  return (
    <div className='boardWrapper'>
      {!isAdding ? (
        <>
          <Column
            deleteAnnouncement={deleteAnnouncement}
            announcements={announcements}
            selectedCategory={selectedCategory}
            handleEditClick={handleEditClick}
          />

          <div className='createCardBtn'>
            <button onClick={() => isFormVisible(true)}>
              Add Announcement
            </button>
          </div>
          
          {isEditing && (
            <EditAnnouncementForm
              setIsEditing={setIsEditing}
              handleEditTitleChange={handleEditTitleChange}
              handleEditTextChange={handleEditTextChange}
              announcementToBeEdited={announcementToBeEdited}
              handleEditFormSubmit={handleEditFormSubmit}
              handleEditCategory={handleEditCategory}
              categories={categories}
            />
          )}
        </>
      ) : (
        <>
          <CreateAnnouncementForm
            isFormVisible={isFormVisible}
            createNewAnnouncement={createNewAnnouncement}
            captureTitle={captureTitle}
            captureText={captureText}
            captureCategory={captureCategory}
            categories={categories}
          />
        </>
      )}
    </div>
  );
};

export default Board;
