import React, { Component } from 'react';
import Card from "./Card";

export class Book extends Component {

 render() {
    return (
      <div className="book">
        <Card family={"status"} />
        <Card family={"status"} />
        <Card family={"status"} />
        <Card family={"curse"} />
        <Card family={"curse"} />
        <Card family={"curse"} />
        <Card family={"curse"} />
        <Card family={"curse"} />
        <Card family={"curse"} />
        <Card family={"curse"} />
      </div>
    );
  }
}

export default Book;
