export default function() {
  this.get('/rentals', function() {
    return {
      data: [{
        type: 'rentals',
        id: 1,
        attributes: {
          title: 'Grand Old Mansion',
          username: 'Veruca Salt',
          email: 'max@rrr.com',
          city: 'San Francisco'
        }
      }]
    };
  });
}
