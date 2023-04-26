import { useFetchPipe } from 'trm-tb-plugin';
import { LineChart } from '@tremor/react';

const dataFormatter = (number: number) =>
  `$ ${Intl.NumberFormat("us").format(number).toString()}`;

export default function Example() {
    const { data, status } = useFetchPipe(
        'livestream_pipe_test',
        {
            date_from: '2023-04-25',
            date_to: '2023-04-26',
        },
        {
            token: 'p.eyJ1IjogIjk1YWExZmFmLTRkMWItNDdhMy1hZDY0LTE5YWRiZTljZjY0NyIsICJpZCI6ICJkMDE0NmMzNi1iNDFmLTQ0NjYtYjgyZS0yM2E4ODA3M2M0YzUifQ.5iFsJWlnJDILHcoN85NvHMdlQ1pvPa-4TiPOAct1z1g',
            // Optional
            // baseUrl: 'https://api.us-east.tinybird.co/v0/pipes/'
        }
    );

    return (
        status === 'loading'
            ? <p>Loading...</p>
            : (
                <LineChart
                    className="mt-10 h-72"
                    data={data}
                    index="date"
                    categories={["sales"]}
                    colors={["blue"]}
                    valueFormatter={ dataFormatter }
                    showYAxis={ false }
                    startEndOnly={ true }
                    showLegend={ false }
                />
            )
    );
}