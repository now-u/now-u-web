import { PageHeader } from "@/components/PageHeader";
import { Cause } from "@/models/cause";

const mockCauses = [
    {
      "id": 61,
      "image": "https://images.unsplash.com/photo-1656490268345-db5139f42497?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "icon": "ic_getinvolved",
      "name": "Water",
      "description": "Some campaign thing about water with a dog as the photo",
      "joiners": null,
      "created_at": "2022-06-29T20:22:44.977Z",
      "updated_at": "2022-06-29T21:09:34.558Z",
      "joined": "Authentication failed"
    },
    {
      "id": 61,
      "image": "https://images.unsplash.com/photo-1656490268345-db5139f42497?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "icon": "ic_getinvolved",
      "name": "Water",
      "description": "Some campaign thing about water with a dog as the photo",
      "joiners": null,
      "created_at": "2022-06-29T20:22:44.977Z",
      "updated_at": "2022-06-29T21:09:34.558Z",
      "joined": "Authentication failed"
    },
    {
      "id": 61,
      "image": "https://images.unsplash.com/photo-1656490268345-db5139f42497?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
      "icon": "ic_getinvolved",
      "name": "Water",
      "description": "Some campaign thing about water with a dog as the photo",
      "joiners": null,
      "created_at": "2022-06-29T20:22:44.977Z",
      "updated_at": "2022-06-29T21:09:34.558Z",
      "joined": "Authentication failed"
    }
]

const CausesHeader = (): JSX.Element => {
    return <PageHeader title="Our Causes" body={["Aenean interdum varius ultrices. Ut at egestas lorem. Suspendisse vehicula ex id libero dapibus tempor. Donec volutpat efficitur lectus et consequat. Proin tempus lorem enim, sit amet malesuada mauris tincidunt ut. Quisque ultrices, metus nec malesuada tristique, libero purus lacinia erat, sit amet porta nulla odio mattis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.", "Aenean interdum varius ultrices. Ut at egestas lorem. Suspendisse vehicula ex id libero dapibus tempor. Donec volutpat efficitur lectus et consequat. Proin tempus lorem enim, sit amet malesuada mauris tincidunt ut. Quisque ultrices, metus nec malesuada tristique, libero purus lacinia erat, sit amet porta nulla odio mattis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."]} />
}

const CauseTile = (props: { cause: Cause }): JSX.Element => {
    return <div className="max-w-sm bg-cream rounded-lg">
        <a href="#">
            <img className="rounded-t-lg h-60 w-full object-cover" src={ props.cause.image } alt="" />
        </a>
        <div className="p-5">
            <div className="flex items-center justify-start flex-1 space-x-4">
              <svg className='text-white' width='26' height='26' viewBox='0 0 24 24'>
            <path fill='currentColor'
              d='M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z' />
          </svg>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{ props.cause.name }</h5>
            </div>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{ props.cause.description }</p>
        </div>
    </div>
}

export const CausesPage = (): JSX.Element => {
    return <>
        <CausesHeader />

        <div className="flex flex-col items-center space-y-1 py-20">
          <div className="grid grid-cols-2 gap-10 items-start">
            { mockCauses.map(cause => <CauseTile cause={cause} />) }
          </div>
        </div>
    </>;
}
