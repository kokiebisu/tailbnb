const resolvers = {
  Query: {
    getStays(root, args, context) {
      return context.prisma.stays();
    },
    getStay(root, args, context) {
      return context.prisma.stay({ title: args.title });
    },
    getAdventures(root, args, context) {
      return context.prisma.adventures();
    },
    getAdventure(root, args, context) {
      return context.prisma.adventure({ title: args.title });
    }
  },
  Mutation: {
    createStay(root, args, context) {
      return context.prisma.createStay({
        title: args.title,
        cost: args.cost,
        hostType: args.hostType,
        country: args.country,
        location: args.location,
        ratings: args.ratings
      });
    },
    deleteStay(root, args, context) {
      return context.prisma.deleteStay({ title: args.title });
    },
    createAdventure(root, args, context) {
      return context.prisma.createAdventure({
        title: args.title,
        period: args.period,
        cost: args.cost,
        country: args.country
      });
    },
    deleteAdventure(root, args, context) {
      return context.prisma.deleteAdventure({
        title: args.title
      });
    }
  }
};

module.exports = resolvers;
