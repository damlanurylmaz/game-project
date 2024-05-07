import { GameWrapper } from "./Game.styled";
import Header from '../../Components/Header';
import { TextField, Button} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SendIcon from '@mui/icons-material/Send';
import { v4 as uuidv4 } from 'uuid'

const Game = () => {
  const [comments, setComments] = useState([])
  const {gameId} = useParams();
  const userId = window.localStorage.getItem('userId');
  const [comment, setComment] = useState('');

  const commentDescription = (e) => {
    const newComment = e.target.value;
    setComment(newComment);
  };

  const getGameDetail = async() => {
    try {
      const commentReq = await fetch(`http://localhost:3000/games/${gameId}`);
      const commentData = await commentReq.json();
      if(!commentReq.ok) {
        console.error('Error updating like status:', await commentReq.text())
      } else {
        setComments(commentData.comments.filter((comment) => comment.userId === userId));
      }
    } catch (error) {
      console.log(error)
    }
  };

  const addCommentHandler = async () => {
    try {
      const id = uuidv4();
      const newComment = await fetch(`http://localhost:3000/games/${gameId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({comments: [...comments, {userId, id, description: comment}]})
      });
      const response = await newComment.json();
      console.log(response);
      setComment('');
      getGameDetail();
    } catch (error) {
      console.log(error)
    }
  };

  const deleteHandler = async (commentId) => {
    const filteredComment = comments.filter((comment) => (
      comment.id !== commentId
    ));
    try {
      const deleteComment = await fetch(`http://localHost:3000/games/${gameId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({comments: filteredComment})
      });
      const response = await deleteComment.json();
      console.log(response);
      getGameDetail();
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getGameDetail();
  },[]);

  return (
    <GameWrapper>
      <div className='header'>
        <Header />
      </div>
      <div className='game-detail-wrapper'>
        <div className='game-container'>
          GAME
        </div>
        <div className='game-comment-container'>
          <div className='add-comment-part'>
            <TextField
              id="standard-multiline-flexible"
              label="Comment..."
              multiline
              maxRows={4}
              className='comment'
              onChange={(e) => commentDescription(e)}
              value={comment}
            />
            <Button
              className='send-comment-icon'
              onClick={() => addCommentHandler()}
              endIcon={<SendIcon />}
            >
              ADD
            </Button>
          </div>
          {
            comments.map((commentObj) => (
              <div key={commentObj.id} className="comment-part">
                <p className="show-comment">{commentObj.description}</p>
                <div className="comment-button-container">
                    <Button>
                      <EditIcon />
                    </Button>
                    <Button
                      onClick={() => deleteHandler(commentObj.id)}
                    >
                      <DeleteIcon />
                    </Button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </GameWrapper>
  )
}

export default Game