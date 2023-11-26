import { personCV } from "./example-cv";
import FormCV from './components/FormCV'
import CreatePreviewCV from "./components/PreviewCV";
export default function App(){
    return (
        <div className="CVApp">
        <FormCV />
        <CreatePreviewCV data={personCV}/>
        </div>
    )
}