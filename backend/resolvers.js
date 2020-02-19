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
        hostType: args.hostType,
        country: args.country,
        street: args.street,
        reviews_per_month: args.reviews_per_month,
        number_of_reviews: args.number_of_reviews,
        img: args.img,
        imglow: args.imglow,
        hostImg: args.hostImg,
        hostImgLow: args.hostImgLow,
        size: args.size,
        description: args.description,
        space: args.space,
        access: args.access,
        notes: args.notes,
        hostName: args.hostName,
        joined: args.joined,
        hostDescription: args.hostDescription,
        duringStay: args.duringStay
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
        street: args.street
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
