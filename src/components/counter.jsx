import React, { Component } from 'react';

class Counter extends Component {
	state = {
		count: 0
	};

	// renderTags() {
	// 	if (this.state.tags.length === 0) return <p>There are no tags.</p>;

	// 	return (
	// 		<ul>
	// 			{this.state.tags.map(tag => (
	// 				<li key={tag}>{tag}</li>
	// 			))}
	// 		</ul>
	// 	);
	// }

	handleIncrement() {
		console.log('Increment Clicked', this.state.count);
	}

	render() {
		return (
			<div>
				<span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					onClick={this.handleIncrement}
					className='btn btn-secondary btn-sm'
				>
					Increment
				</button>

				{this.state.tags.length === 0 && <p>Please create a new tag!</p>}
				{this.renderTags()}
			</div>
		);
	}

	getBadgeClasses() {
		let classes = 'badge m-2 badge-';
		classes += this.state.count === 0 ? 'warning' : 'primary';
		return classes;
	}

	formatCount() {
		const { count } = this.state;
		return count === 0 ? 'Zero' : count;
	}
}

export default Counter;
