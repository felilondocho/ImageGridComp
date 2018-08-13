import React from 'react';
import { Button } from 'antd';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import ImageGrid from '../ImageGrid';

const App = () => (
  <div>
    <h1>
      Pictures
    </h1>
    <div>
      <Button>
        Add URL
      </Button>
      <Button>
        Upload Image
      </Button>
    </div>
    <ImageGrid />
  </div>
);

export default DragDropContext(HTML5Backend)(App);
