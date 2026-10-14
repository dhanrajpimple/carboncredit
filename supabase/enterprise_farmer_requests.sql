create table if not exists public.enterprise_farmer_requests (
  id uuid primary key default gen_random_uuid(),
  organization_name text not null,
  organization_type text not null,
  contact_name text not null,
  email text not null,
  phone text not null,
  country text not null default 'India',
  target_state text not null,
  target_district text,
  target_acres numeric(12, 2) not null check (target_acres > 0),
  farmer_count integer check (farmer_count is null or farmer_count > 0),
  planting_timeline text,
  project_goal text,
  notes text,
  razorpay_order_id text,
  razorpay_payment_id text,
  payment_status text not null default 'pending' check (payment_status in ('pending', 'paid', 'failed', 'refunded')),
  status text not null default 'active' check (status in ('active', 'review', 'closed', 'rejected')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists enterprise_farmer_requests_public_idx
  on public.enterprise_farmer_requests (payment_status, status, created_at desc);

create index if not exists enterprise_farmer_requests_location_idx
  on public.enterprise_farmer_requests (target_state, target_district);

alter table public.enterprise_farmer_requests enable row level security;

create policy "Public can read paid active enterprise farmer requests"
  on public.enterprise_farmer_requests
  for select
  using (payment_status = 'paid' and status = 'active');

create or replace function public.set_enterprise_farmer_requests_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists enterprise_farmer_requests_updated_at on public.enterprise_farmer_requests;

create trigger enterprise_farmer_requests_updated_at
  before update on public.enterprise_farmer_requests
  for each row
  execute function public.set_enterprise_farmer_requests_updated_at();
