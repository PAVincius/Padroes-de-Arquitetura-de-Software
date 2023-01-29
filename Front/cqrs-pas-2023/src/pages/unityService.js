class UnityService extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    unityService: null
    };
    }
    componentDidMount() {
        axios.get(`/unityService/${this.props.match.params.id}`)
            .then(res => this.setState({ unityService: res.data }))
            .catch(err => console.log(err));
    }
    
    render() {
        if (!this.state.unityService) {
            return <div>Loading...</div>;
        }
    
        return (
            <div>
                <h2>{this.state.unityService.name}</h2>
                <p>Array of Unity Service: {this.state.unityService.arrayUnityService}</p>
                <p>Number of Unity Service: {this.state.unityService.numUnityService}</p>
            </div>
    );
    }
}