# react-lazy-blur-image

Load low resolution / placeholder image first and then load the actual image lazily when it's in the viewport.

<hr/>

[![](https://nodei.co/npm/react-lazy-blur-image.png?compact=true)](https://nodei.co/npm/react-lazy-progressive-image/)

[![npm](https://img.shields.io/npm/dm/react-blur-image.svg?style=for-the-badge)](https://www.npmjs.com/package/react-lazy-blur-image)
[![npm](https://img.shields.io/npm/l/react-blur-image.svg?style=for-the-badge)](https://www.npmjs.com/package/react-lazy-blur-image)

</p>
<hr/>

# :zap: How does it work ?

The component starts by displaying a lightweight gray placeholder (base64 encoded).

When the component is about to reach the viewport, the gray placeholder is replaced with the actual placeholder you provided (Can be any image. Either local placeholder or remote low resolution image) and at the same time the actual image is loaded lazily and replaces the placeholder when it's fully loaded.

This gives us an absolute perfect user experience / performance balance.

<hr/>

# :zap: Installation

The package is available on npm.

```bash
npm i -s lazy-react-blur
```

```bash
yarn add lazy-react-blur
```

<hr/>

# :zap: Usage

This component expects exactly one child which has to be a function. You get the `src` and the `style` to apply (for blur effect)

<!-- prettier-ignore -->
```javascript
import React from 'react';
import LazyImage from 'lazy-react-blur';

const App = () => {
  return (
    <LazyImage
        placeholder={'http://example.com/placeholder.png'}
        uri={'http://example.com/src.png'}
        render={(src, style) => <img src={src} style={style} />}
    />
  );
};
```

The child which is a function will have access to `src` and `style` (for blur effect) values as arguments.

| Render prop | Description                                               | Type   | Value                                                                                               |
| ----------- | --------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------- |
| src         | The src of the image being rendered                       | String | Initially points to the placeholder image, then loads image and will then point to the source image |
| style       | Style props to apply to your rendered image (blur effect) | Object | Jsx style object                                                                                    |

<hr/>

### Example usage with styled-components

You can use `styled-components`, to transition an image from the placeholder when the image has loaded.
You can use the `render props` as mentioned above and then use it to animate the `opacity` of the image from `0.2` to `1` when the image is loaded. This is , of course, a basic example. But you can use this logic to create more powerful animations.

For eg :

<!-- prettier-ignore -->
```javascript
import React, { Component } from 'react';
import styled from 'styled-components';
import LazyImage from 'react-lazy-blur-image';

const Image = styled.img`
  height: 450px;
  width: 800px;
  margin-top: 200px;
  display: block;
  object-fit: cover;
`;

const Usage = () => {
  return (
    <LazyImage
        uri={'/assets/imageURL'}
        placeholder={'/assets/placeholderURL'}
        render={(src, style) => <Image src={src} style={style} />}
    />
  );
};
```

## License:
Do What the Fuck You Want To Public License
