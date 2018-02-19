import React from 'react';
import ImagesLoaded from 'react-images-loaded';
import rafSchedule from 'raf-schd';

class GridItem extends React.Component {
	constructor(props){
		super(props);

		this.resizeGridItem = this.resizeGridItem.bind(this);
		this.updateRowSpan = this.updateRowSpan.bind(this);
		this.scheduleUpdateRowSpan = this.scheduleUpdateRowSpan.bind(this);
		this.scheduleUpdate = rafSchedule(
			gridItemHeight => this.updateRowSpan(gridItemHeight)
		);

		this.state = {
			rowSpan: 1
		}
	}

	resizeGridItem(rowGap, rowHeight, itemHeight) {
		const rowSpan = Math.ceil(
			(parseInt(itemHeight, 10)+parseInt(rowGap, 10))
			/
			(parseInt(rowHeight, 10)+parseInt(rowGap, 10))
		);

		this.setState(()=>({
			rowSpan: rowSpan
		}));
	}

	updateRowSpan(contentHeight) {
		const gridItemContentHeight =
			typeof contentHeight === 'object' && contentHeight.elements // ImagesLoaded will pass itself as a param
				? contentHeight.elements[0].getBoundingClientRect().height
				: contentHeight;

		this.resizeGridItem(
			this.props.rowGap,
			this.props.rowHeight,
			gridItemContentHeight
		)
	}

	scheduleUpdateRowSpan(gridItemHeight) {
		// When we receive a scroll event, schedule an update.
		// If we receive many updates within a frame, we'll only publish the latest value.
		this.scheduleUpdate(gridItemHeight);
	}

	componentDidMount() {
		window.addEventListener(
			"resize",
			() => {this.scheduleUpdateRowSpan(this.gridItem.getBoundingClientRect().height)}
		);
	}

	render() {
		const {rowGap, rowHeight, children, ...other} = this.props;

		return(
			<li
				key={this.key}
				style={{
					gridRowEnd: `span ${this.state.rowSpan}`
				}}
			>
				<ImagesLoaded
					done={this.updateRowSpan}
				>

					<div className="content" ref={(div) => { this.gridItem = div; }}>{children}</div>
				</ImagesLoaded>
			</li>
		);
	}

}

export default GridItem;
