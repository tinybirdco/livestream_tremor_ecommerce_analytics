import { Card, Grid } from "@tremor/react";

export default function Overview() {
  return (
    <>
      <div className="mt-6">
        <Card>
          <div className="h-80" />
        </Card>
      </div>
      <Grid numColsMd={2} numColsLg={3} className="gap-6 mt-6">
        <Card>
          <div className="h-28" />
        </Card>
        <Card>
          <div className="h-28" />
        </Card>
        <Card>
          <div className="h-28" />
        </Card>
      </Grid>
    </>
  );
}
