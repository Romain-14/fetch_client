import {Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Stories from './Components/Stories';
import Story from './Components/Story';

function App() {
    return (
        
            <>
                <Header />
                <Routes>
                    <Route index path="/" element={<Home />} />
                    <Route index path="/stories" element={<Stories />} />
                    <Route index path="/story/:id" element={<Story />} />
                </Routes>
            </>

    )
}

export default App