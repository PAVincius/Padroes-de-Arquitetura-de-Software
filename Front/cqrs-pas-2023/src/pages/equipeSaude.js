class EquipeSaude extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    equipeSaude: null
    };
    }
    componentDidMount() {
        axios.get(`/equipeSaude/${this.props.match.params.id}`)
            .then(res => this.setState({ equipeSaude: res.data }))
            .catch(err => console.log(err));
    }
    
    render() {
        if (!this.state.equipeSaude) {
            return <div>Loading...</div>;
        }
    
        return (
            <div>
                <h2>{this.state.equipeSaude.name}</h2>
                <p>Array of Equipes: {this.state.equipeSaude.arrayEquipes}</p>
                <p>Number of Equipes: {this.state.equipeSaude.numEquipes}</p>
            </div>
        );
    }
}    