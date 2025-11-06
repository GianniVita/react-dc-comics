export default function MenuItem({item, index}) {

return(
     <li key={index} className="nav-item">
        <a className="nav-link" href="#">{item}</a>
    </li>
    
)
}