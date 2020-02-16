const resolvers = {
  Query: {
    stays(root, args, context) {
      return context.prisma.stays();
    },
    stay(root, args, context) {
      return context.prisma.stay({ title: args.title });
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
        title: args.title,
        cost: args.cost,
        hostType: args.hostType,
        country: args.country,
        location: args.location,
        ratings: args.ratings,
        reviews: args.reviews,
        img: args.img,
        imglow: args.imglow,
        hostImg: args.hostImg,
        hostImgLow: args.hostImgLow,
        size: args.size,
        description: args.description,
        space: args.space,
        access: args.access,
        note: args.note,
        hostName: args.hostName,
        joined: args.joined,
        hostDescription: args.hostDescription,
        duringStay: args.duringStay
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
        cost: args.cost,
        ratings: args.ratings,
        reviews: args.reviews,
        country: args.country,
        img: args.img,
        imglow: args.imglow,
        location: args.location
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
