import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'

const inter = Inter({ subsets: ['latin'] })

function App() {
const router = useRouter()

return (
  <div>
    <Route exact path="/" component={PacienteList} />
    <Route path="/paciente/:id" component={() => <Paciente id={router.query.id} />} />
    <Route path="/medicalRecord/:id" component={() => <MedicalRecord id={router.query.id} />} />
    <Route path="/equipeSaude/:id" component={() => <EquipeSaude id={router.query.id} />} />
    <Route path="/unityService/:id" component={() => <UnityService id={router.query.id} />} />
  </div>
  )
}
export default App





