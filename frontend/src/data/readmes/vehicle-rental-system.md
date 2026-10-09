# Vehicle Rental System

A full-stack platform for running a car rental business, covering customers, vehicles, reservations, rentals, payments, incidents and maintenance. The focus is on modelling a complex real-world domain correctly.

## What It Covers

- Customer management with membership tiers and loyalty points
- Fleet tracking, availability and maintenance history
- Reservations that check for date conflicts before booking
- Active rentals with return processing: late fees, damage fees and mileage tracking
- Payment records and incident reports
- Maintenance scheduling for the fleet
- A dashboard with revenue and usage statistics

## Data Model

The database has around 15 tables, all linked through foreign keys.

| Area | Tables |
|---|---|
| People | Customers, employees |
| Fleet | Vehicles, locations, insurance plans |
| Bookings | Reservations, rentals, payments |
| Operations | Maintenance records, incident reports |

## The Hardest Part: Returning a Car

Returning a vehicle touches many things at once. The system has to:

1. Calculate late fees if the rental is overdue
2. Log any damage and its fees
3. Update the vehicle's mileage
4. Mark the vehicle available again
5. Update the customer's membership points

Keeping this logic in one place, instead of scattered across the app, was the main design challenge.

## Tech Stack

| Layer | Technology |
|---|---|
| Backend | FastAPI, SQLAlchemy, Pydantic |
| Database | MySQL |
| Frontend | React, TypeScript (Vite), React Router |
| Styling | Plain CSS |
