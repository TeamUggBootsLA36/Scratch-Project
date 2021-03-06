import React, { Component } from 'react';
import { connect } from 'react-redux';

import FeedItem from '../components/FeedItem';

/*

Renders a container showing all feed items related to a certain topic

A resource's name, id, url, description, likes and liked values are mapped from the resources array that is passed down as a prop from the parent component

Upvote and downvote functions are passed down directly as props from the parent component

*/

const FeedItemContainer = ({ resources, upvote, downvote, likeFunc }) => {
  const items = resources.map((elem, index) => {
    return (
      <FeedItem
        name={elem.name}
        url={elem.url}
        description={elem.description}
        likes={elem.likes}
        id={elem._id}
        key={index}
        tech={elem.tech}
        upvote={upvote}
        downvote={downvote}
        liked={elem.liked}
        likeFunc = {likeFunc}
      />
    );
  });
  return <div>{items}</div>;
};

export default FeedItemContainer;
