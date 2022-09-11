import { PageHeader } from "@/components/PageHeader";

const CausesHeader = (): JSX.Element => {
    return <PageHeader title="Our Causes" body={["Aenean interdum varius ultrices. Ut at egestas lorem. Suspendisse vehicula ex id libero dapibus tempor. Donec volutpat efficitur lectus et consequat. Proin tempus lorem enim, sit amet malesuada mauris tincidunt ut. Quisque ultrices, metus nec malesuada tristique, libero purus lacinia erat, sit amet porta nulla odio mattis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.", "Aenean interdum varius ultrices. Ut at egestas lorem. Suspendisse vehicula ex id libero dapibus tempor. Donec volutpat efficitur lectus et consequat. Proin tempus lorem enim, sit amet malesuada mauris tincidunt ut. Quisque ultrices, metus nec malesuada tristique, libero purus lacinia erat, sit amet porta nulla odio mattis ante. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."]} />
}

export const CausesPage = (): JSX.Element => {
    return <>
        <CausesHeader />
    </>;
}
