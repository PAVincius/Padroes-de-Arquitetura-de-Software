class MedicalRecord extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    medicalRecord: null
    };
    }

    componentDidMount() {
        axios.get(`/medicalRecord/${this.props.match.params.id}`)
            .then(res => this.setState({ medicalRecord: res.data }))
            .catch(err => console.log(err));
    }
    
    render() {
        if (!this.state.medicalRecord) {
            return <div>Loading...</div>;
        }
    
        return (
            <div>
                <h2>{this.state.medicalRecord.name}</h2>
                <p>Array of Patients: {this.state.medicalRecord.arrayPatients}</p>
                <p>Number of Professionals: {this.state.medicalRecord.numProfissionais}</p>
            </div>
        );
    }
}