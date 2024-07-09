export interface TouristPackages {
    packageId:          number;
    packageCategory:    string;
    destinationPlace:   string;
    packageDescription: string;
    departureDate:      Date;
    returnDate:         Date;
    durationDays:       number;
    packagePrice:       number;
    availableSpots:     number;
}
