import {BrowserRouter, Navigate, Routes, Route} from "react-router-dom"

import AppLayout from "./ui/AppLayout"

import Notes from "./pages/Notes"
import ArchivedNote from "./pages/ArchivedNote"
import RecycledNote from "./pages/RecycledNote"
import PageNotFound from "./pages/PageNotFound"

import GlobalStyles from "./styles/globalStyles"


function App() {
  return <>
  <GlobalStyles/>
  <BrowserRouter>
  <Routes>
    <Route element={<AppLayout/>}>
    <Route path="/" element={<Navigate replace to="allNotes"/>}/>
    <Route path="allNotes" element={<Notes/>}/>
    <Route path="archive" element={<ArchivedNote/>}/>
    <Route path="recycle" element={<RecycledNote/>}/>
    <Route path="*" element={<PageNotFound/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  </>
}

export default App;
