import React from 'react';
import LazyLoad from 'react-lazy-load';

const ImageWrapper = (props) => (
	<div className={`image-chopper ${props.customClassName} ${props.onClickHandler ? `cursor-pointer`: ``}`} onClick={props.onClickHandler}>
		<LazyLoad
		debounce={false}>
			<img 
				src={props.src} 
				alt={props.alt} 
				width={props.width} 
				height={props.height} 
				className={props.className}/>
		</LazyLoad>
	</div>
);

export default ImageWrapper;