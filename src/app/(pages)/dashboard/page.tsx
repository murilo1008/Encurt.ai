import HeaderDashboard from '@/components/header-dashboard';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import WelcomeBack from './welcome-back';
import DashboardComponent from './dashboard-component';

export default async function Dashboard(){

    const user = await currentUser()

    if(!user || !user.id){
        redirect("/")
    }

    return(
        <div className='flex w-full md:p-10 p-5'>
            <DashboardComponent/>
        </div>
    )
}