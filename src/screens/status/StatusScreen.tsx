import { PageHeader } from '@/components/layout/PageHeader';
import { StatusGrid } from '@/components/status/StatusGrid';
import { StatusExtraSections } from '@/components/status/StatusExtraSections';
import { statusServices as services } from '@/data/statusData';

export function StatusScreen() {
  return (
    <div className="pt-20">
      <PageHeader 
        label="Platform"
        title="System Status"
        description="Current platform status and service availability."
      />
      <StatusGrid services={services} />
      <StatusExtraSections />
    </div>
  );
}
