import React from 'react';
import { useEffect, useId, useRef, useState } from 'react';
import { Box, Flex, Image, Label, Masonry, Text } from 'gestalt';
import 'gestalt';
import 'gestalt-datepicker';

import css from './app.css';

    
function getPins() {
  const pins = [
    {
      color: '#2b3938',
      height: 316,
      src: 'https://i.ibb.co/sQzHcFY/stock9.jpg',
      width: 474,
      name: 'the Hang Son Doong cave in Vietnam',
    },
    {
      color: '#8e7439',
      height: 1081,
      src: 'https://i.ibb.co/zNDxPtn/stock10.jpg',
      width: 474,
      name: 'La Gran Muralla, Pekín, China',
    },
    {
      color: '#698157',
      height: 711,
      src: 'https://i.ibb.co/M5TdMNq/stock11.jpg',
      width: 474,
      name: 'Plitvice Lakes National Park, Croatia',
    },
    {
      color: '#4e5d50',
      height: 632,
      src: 'https://i.ibb.co/r0NZKrk/stock12.jpg',
      width: 474,
      name: 'Ban Gioc – Detian Falls : 2 waterfalls straddling the Vietnamese and Chinese border.',
    },
    {
      color: '#6d6368',
      height: 710,
      src: 'https://i.ibb.co/zmFd0Dv/stock13.jpg',
      width: 474,
      name: 'Border of China and Vietnam',
    },
  ];

  const pinList = [...new Array(3)].map(() => [...pins]).flat();
  return Promise.resolve(pinList);
}

function GridComponent({ data }) {
  return (
    <Flex direction="column">
      <Image
        alt={data.name}
        color={data.color}
        naturalHeight={data.height}
        naturalWidth={data.width}
        src={data.src}
      />
      <Text>{data.name}</Text>
    </Flex>
  );
}

export default function App() {
  const [pins, setPins] = useState([]);
  const [width, setWidth] = useState(700);
  const scrollContainerRef = useRef();
  const gridRef = useRef();

  const labelId = useId();

  useEffect(() => {
    getPins().then((startPins) => {
      setPins(startPins);
    });
  }, []);

  useEffect(() => {
    gridRef.current?.handleResize();
  }, [width]);

  const updateWidth = ({ target }) => {
    setWidth(Number(target.value));
  };

  const isBackgroundLight = true;
  return (
    <div className='open'
      style={{
        backgroundColor: isBackgroundLight ? 'light' : 'dark',
      }}
    >
    <p className='open'>opendyslexic</p>
    <Box padding={2}>
      <Flex direction="column" gap={4}>
        <Flex alignItems="center" justifyContent='center' direction="column">
          <Flex.Item>
            <Label htmlFor={labelId}>
              <Text>Container Width</Text>
            </Label>
          </Flex.Item>
          <input
            id={labelId}
            type="range"
            defaultValue={800}
            onChange={updateWidth}
            min={200}
            max={800}
            step={5}
            style={{ width: '400px', display: 'block', margin: '10px auto' }}
          />
        </Flex>

        <div
          tabIndex={0}
          ref={(el) => {
            scrollContainerRef.current = el;
          }}
          style={{
            height: '900px',
            margin: '0 auto',
            outline: '3px solid #ddd',
            overflowY: 'scroll',
            width: `${width}px`,
          }}
        >
          {scrollContainerRef.current && (
            <Masonry
              columnWidth={170}
              gutterWidth={20}
              items={pins}
              layout="flexible"
              minCols={1}
              ref={(ref) => {
                gridRef.current = ref;
              }}
              renderItem={({ data }) => <GridComponent data={data} />}
              scrollContainer={() => scrollContainerRef.current}
            />
          )}
        </div>
      </Flex>
    </Box>
    </div>
  );
}
