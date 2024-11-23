import Link from "next/link"

function Country() {
  return (
    <div>
    <h1>This  &nbsp; is   &nbsp; Country  &nbsp; Page</h1>
    
    <ul>
        <li><Link className = "mylink" href={"/Countries/Pakistan"}>&nbsp;Pakistan &nbsp;</Link></li><br />
        <li><Link className = "mylink" href={"/Countries/Pakistan"}>&nbsp;Australia &nbsp;</Link></li><br />
        <li><Link className = "mylink" href={"/Countries/Pakistan"}>&nbsp;IceLand &nbsp;</Link></li><br />
        <li><Link className = "mylink" href={"/Countries/Pakistan"}>&nbsp;SaudiArabia &nbsp;</Link></li><br />
        <li><Link className = "mylink" href={"/Countries/Pakistan"}>&nbsp;NewZeland &nbsp;</Link></li><br />
</ul>
    </div>
    
  )
}
export default Country
