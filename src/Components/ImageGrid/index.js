import React from 'react';
import Sortable from 'sortablejs';

import styles from './ImageGrid.scss';
import imageList from '../../lib/savedImagesSim';
import ImageItem from './ImageItem';

class ImageGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: imageList,
    };
    this.imageItemRef = React.createRef();
  }

  // moveCard = (dragIndex, hoverIndex) => {
  //   const { cards } = this.state;
  //   const dragCard = cards[dragIndex];
  //   // this.setState(prevState => ({
  //   //   images: {
  //   //     ...prevState.images,
  //   //   },
  //   // }));

  //   this.setState(prevState => (
  //     update(prevState, {
  //       cards: {
  //         $splice: [
  //           [dragIndex, 1],
  //           [hoverIndex, 0, dragCard],
  //         ],
  //       },
  //     })));
  // }

  componentDidMount() {
    const list = document.getElementById('list');
    const sortable = Sortable.create(list);
  }

  render() {
    const { images } = this.state;
    return (
      <div className={styles.list} id="list" ref={this.imageItemRef}>
        {images.map((image, index) => (
          <ImageItem
            url={image}
            alt={`image${index}`}
          />
        ))}
      </div>
    );
  }
}

export default ImageGrid;
