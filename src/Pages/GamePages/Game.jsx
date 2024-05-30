import { GameWrapper } from "./Game.styled";
import Header from '../../Components/Header';
import { TextField, Button, Avatar} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SendIcon from '@mui/icons-material/Send';
import { v4 as uuidv4 } from 'uuid'
import { useSelector } from "react-redux";

const Game = () => {
  const [comments, setComments] = useState([])
  const {gameId} = useParams();
  const userId = window.localStorage.getItem('userId');
  const [comment, setComment] = useState('');
  const user = useSelector((state) => state.home.user);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedComment, setEditedComment] = useState('');

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
        setComments(commentData.comments);
      }
    } catch (error) {
      console.log(error)
    }
  };

  const addCommentHandler = async () => {
    try {
      if(userId && comment) {
        const id = uuidv4();
        const newComment = await fetch(`http://localhost:3000/games/${gameId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({comments: [...comments, {userId, id, description: comment, userName: user.name }]})
        });
        const response = await newComment.json();
        console.log(response);
        setComment('');
        getGameDetail();
      }
      else {
        alert('You cannot send comment!!')
      }
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

  const handleEdit = (commentId) => {
    setEditingCommentId(commentId);
    const commentToEdit = comments.find(comment => comment.id === commentId);
    setEditedComment(commentToEdit.description);
  };

  const saveEditedComment = async () => {
    try {
      const editedCommentIndex = comments.findIndex(comment => comment.id === editingCommentId);
      const updatedComments = [...comments];
      updatedComments[editedCommentIndex].description = editedComment;
      const editCommentData = await fetch(`http://localHost:3000/games/${gameId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type':'application/json'
      },
      body: JSON.stringify({comments: updatedComments})
      })
      const response = await editCommentData.json();
      console.log(response);
      setEditingCommentId(null);
      getGameDetail();
    } catch (error) {
      console.log(error);
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
              placeholder="Comment..."
              multiline
              maxRows={4}
              className='comment'
              onChange={(e) => commentDescription(e)}
              value={comment}
              onKeyDown={(e) => e.key === "Enter" ? addCommentHandler() : null}
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
            Array.isArray(comments) && comments.map((commentObj) => (
              <div key={commentObj.id} className="comment-part">
                <Avatar alt={commentObj.userName} src="/static/images/avatar/2.jpg" />
                <div className="show-comment">
                  {commentObj.id === editingCommentId ? 
                    <TextField 
                      value={editedComment} 
                      onChange={(e) => setEditedComment(e.target.value)}
                      className="commentEditInput"
                      onKeyDown={(e) => e.key === "Enter" ? saveEditedComment() : null}
                    /> : 
                    commentObj.description
                  }
                </div>
                { commentObj.userId === userId &&
                  <div className="comment-button-container">
                    {commentObj.id === editingCommentId ? 
                      <Button onClick={saveEditedComment}>
                        Save
                      </Button> :
                      <div className="button-wrapper">
                        <Button onClick={() => handleEdit(commentObj.id)}>
                          <EditIcon />
                        </Button>
                        <Button onClick={() => deleteHandler(commentObj.id)}>
                          <DeleteIcon />
                        </Button>
                      </div>
                    }
                  </div>
                }
              </div>
            ))
          }
        </div>
      </div>
    </GameWrapper>
  )
}

export default Game