import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

export default function CommentCard(props, children) {
    const date = props.datePosted
    
 console.log(props.children)

    const CommentCard_1 = styled.div`
        text-align: center;
        background-color: white;
        border: 6px;
        padding: 1em;
`
    const EachComment = styled.p`
        display: flex;
        background-color: lightgrey;
    `
    const EachCommentText = styled.p`
        display: flex;
        flex-direction: column;
    `
  return (

    <CommentCard_1>
        <EachComment>
        <img src= {props.imageUrl} /> 
        <EachCommentText>
            {props.userName}
            {props.children}
            like.reply
            {dayjs(date).format('DD/MM/YYYY').from}
        </EachCommentText>
        </EachComment>
    </CommentCard_1>
  )
}


