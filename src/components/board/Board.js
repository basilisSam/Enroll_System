import Column from "../column/Column";
import CreateAnnouncementForm from "../createAnnouncementForm/CreateAnnouncementForm";
import "./Board.css";
const Board = ({
  isFormVisible,
  isAdding,
  announcements,
  selectedCategory,
}) => {
  return (
    <div className='boardWrapper'>
      {!isAdding ? (
        <>
          <Column
            announcements={announcements}
            selectedCategory={selectedCategory}
          />

          <div className='createCardBtn'>
            <button onClick={() => isFormVisible(true)}>
              Add Announcement
            </button>
          </div>
        </>
      ) : (
        <CreateAnnouncementForm isFormVisible={isFormVisible} />
      )}
    </div>
  );
};

export default Board;
