import PropTypes from 'prop-types';
import React from 'react';
import GridItem from './GridItem';

class Grid extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			gridAutoRows: null,
			gridRowGap: null
		}

		this.updateGridAttributes = this.updateGridAttributes.bind(this);
	}

	updateGridAttributes(gridAutoRows, gridRowGap) {
		this.setState(()=>({
			gridAutoRows: gridAutoRows,
			gridRowGap: gridRowGap
		}));
	}

	componentDidMount() {
		window.addEventListener(
			"resize",
			() => {
				this.updateGridAttributes(
					parseInt(window.getComputedStyle(this.gridContainer).getPropertyValue('grid-auto-rows')),
					parseInt(window.getComputedStyle(this.gridContainer).getPropertyValue('grid-row-gap'))
				)
			}
		);
		setTimeout(() => { // hack to make sure we get the right values
			this.updateGridAttributes(
				parseInt(window.getComputedStyle(this.gridContainer).getPropertyValue('grid-auto-rows')),
				parseInt(window.getComputedStyle(this.gridContainer).getPropertyValue('grid-row-gap'))
			)
		}, 1);
	}

	render(){
		const {children, gridItems} = this.props;

		return(
			<ul ref={(ul) => { this.gridContainer = ul; }}>
				{gridItems.map((item, i)=>{
					return(
						item.props &&
							<GridItem
								key={i}
								rowGap={this.state.gridAutoRows}
								rowHeight={this.state.gridRowGap}
							>
								{item.props.children}
							</GridItem>
					);
				})}
			</ul>
		)
	}
};

Grid.propTypes = {
	gridItems: PropTypes.array,
};

export default Grid;