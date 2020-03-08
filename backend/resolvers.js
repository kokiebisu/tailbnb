const resolvers = {
  Query: {
    stays(root, args, context) {
      return context.prisma.stays();
    },
    stay(root, args, context) {
      return context.prisma.stay({ name: args.name });
    },
    adventures(root, args, context) {
      return context.prisma.adventures();
    },
    adventure(root, args, context) {
      return context.prisma.adventure({ id: args.id });
    },
    experiences(root, args, context) {
      return context.prisma.experiences();
    },
    experience(root, args, context) {
      return context.prisma.experience({ id: args.id });
    }
  },
  Mutation: {
    createStay(root, args, context) {
      return context.prisma.createStay({
        name: args.name,
        price: args.price,
        host_is_superhost: args.host_is_superhost,
        country: args.country,
        street: args.street,
        reviews_per_month: args.reviews_per_month,
        number_of_reviews: args.number_of_reviews,
        picture_url: args.img,
        imglow: args.imglow,
        host_thumbnail_url: args.host_thumbnail_url,
        host_picture_url: args.host_picture_url,
        size: args.size,
        description: args.description,
        space: args.space,
        access: args.access,
        notes: args.notes,
        host_name: args.host_name,
        host_since: args.host_since,
        hostDescription: args.hostDescription,
        duringStay: args.duringStay,
        host_response_rate: args.host_response_rate,
        host_response_time: args.host_response_time,
        accomodates: args.accommodates,
        beds: args.beds,
        bedrooms: args.bedrooms,
        bathrooms: args.bathrooms
      });
    },
    deleteStay(root, args, context) {
      return context.prisma.deleteStay({ name: args.name });
    },
    createAdventure(root, args, context) {
      return context.prisma.createAdventure({
        title: args.title,
        period: args.period,
        price: args.price,
        country: args.country,
        img: args.img,
        imglow: args.imglow
      });
    },
    deleteAdventure(root, args, context) {
      return context.prisma.deleteAdventure({
        title: args.title
      });
    },
    createExperience(root, args, context) {
      return context.prisma.createExperience({
        title: args.title,
        price: args.price,
        reviews_per_month: args.reviews_per_month,
        number_of_reviews: args.number_of_reviews,
        country: args.country,
        img: args.img,
        imglow: args.imglow,
        street: args.street,
        category: args.category,
        available: args.available
      });
    },
    deleteExperience(root, args, context) {
      return context.prisma.deleteExperience({
        title: args.title
      });
    }
  }
};

module.exports = resolvers;
