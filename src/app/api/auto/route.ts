
let intervalId:any = ''

const automation = async () => {
    console.log('call to automation');
}

const setTrigger = async (time:number) => {

    intervalId = setInterval(async () => {
        console.log('call interval');

        await automation()
    },time)
}

export async function POST(req: Request){
    try {
        console.log('auto api hit');

        const body = await req.json()

        const interval = body.interval;

        console.log(`interval = ${interval}`);
    
        await setTrigger(1000*interval)
    
        return new Response(JSON.stringify({
            status: true,
            //@ts-ignore
            // data: res.data
        }))
    } catch (error) {
        console.log('back error');
        console.log(error);
    }
}

export async function GET(req: Request){
    try {
        console.log('auto stop api hit');
        console.log('Stopping');

        clearInterval(intervalId);
    
        return new Response(JSON.stringify({
            status: true,
            //@ts-ignore
            // data: res.data
        }))
    } catch (error) {
        console.log('back error');
        console.log(error);
    }
}