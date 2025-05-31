
import { BlogList } from '../Components'

const DashboardRightBar = ({ props_data }) => {
    const { selectedMenu } = props_data;

  return (
    <>
        {/* <h1 className='text-2xl'>Dashboard</h1>
        <p className='text-lg'>This is a placeholder for the dashboard content.</p> */}
        {
            selectedMenu === 'profile' ? (<div>{selectedMenu}</div>) : null
        }
        {
            selectedMenu === 'blogs' ? (<div>{ <BlogList/>}</div>) : null
        }
    </>
  );
}


export default DashboardRightBar;