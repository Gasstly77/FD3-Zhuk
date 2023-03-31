const Filter = React.createClass({

    displayName: 'Filter',

    propTypes: {
        wordList:React.PropTypes.array
    
      },

      getInitialState: function() {
        return { 
            isSort: false,
            filterStr:"",
            currentWordList:this.props.wordList,
        };
      },

      sortClicked: function(eo) {
            this.setState({isSort:eo.target.checked}, this.checkFilter)
      },

      filterLetters: function(eo) {
            this.setState({filterStr:eo.target.value}, this.checkFilter)

      },

      clearFilter: function() {
        console.log("clear");
        this.setState({isSort:false}, this.checkFilter);
        this.setState({filterStr:""}, this.checkFilter);
      },

      checkFilter: function() {
        let list=this.props.wordList.slice();
        if (this.state.filterStr) {
            list=list.filter(w=>w.includes(this.state.filterStr)); };
        if ( this.state.isSort)
            {list.sort(); };
        this.setState({currentWordList:list});

      },


      


render: function() {        
        return React.DOM.div( 
            {className: 'Filter_Elements'},
                React.DOM.input( {type:'checkbox',checked:this.state.isSort, onChange:this.sortClicked} ),
                React.DOM.input( {type:'text',value:this.state.filterStr, onChange:this.filterLetters} ),
                React.DOM.input( {type:'button', value:'сбросить', onClick:this.clearFilter} ),
                React.DOM.div( {className:'Filter_List'},this.state.currentWordList.join('\n')),
                );
        }
    }    
);