// All project screenshot imports
import PG_Linear from '../assets/screenshots/PG_Linear.png'
import PG_NN from '../assets/screenshots/PG_NN.png'
import PG_Comparison from '../assets/screenshots/PG_Comparison.png'
import Iris_Anvil from '../assets/screenshots/Iris_Anvil.png'
import Setosa from '../assets/screenshots/Setosa.png'
import Versicolor from '../assets/screenshots/Versicolor.png'
import Virginica from '../assets/screenshots/Virginica.png'
import Iris_KNN from '../assets/screenshots/Iris_KNN.png'
import Iris_MLP from '../assets/screenshots/Iris_MLP.png'
import Boston_Heatmap from '../assets/screenshots/Boston_Heatmap.png'
import Boston_MAE from '../assets/screenshots/Boston_MAE.png'
import Boston_R2 from '../assets/screenshots/Boston_R2.png'
import Boston_Prediction from '../assets/screenshots/Boston_Prediction.png'
import Boston_Training from '../assets/screenshots/Boston_Training.png'
import Boston_Comparison from '../assets/screenshots/Boston_Comparison.png'
import Boston_Streamlit from '../assets/screenshots/Boston_Streamlit.png'
import Cifar_Initial from '../assets/screenshots/Cifar_Initial.png'
import Cifar_Training5 from '../assets/screenshots/Cifar_Training5.png'
import Cifar_Accuracy5 from '../assets/screenshots/Cifar_Accuracy5.png'
import Cifar_Accuracy10 from '../assets/screenshots/Cifar_Accuracy10.png'
import Cifar_Prediction from '../assets/screenshots/Cifar_Prediction.png'
import Cat from '../assets/screenshots/Cat.png'
import Dog from '../assets/screenshots/Dog.png'
import CatDog_Prediction from '../assets/screenshots/CatDog_Prediction.png'
import Positive from '../assets/screenshots/Positive.jpg'
import Negative from '../assets/screenshots/Negative.jpg'
import Infographic from '../assets/screenshots/Infographic.png'

const projects = [
  {
    id: 'plant-growth',
    title: 'Plant Growth Linear Regression vs Neural Network',
    shortTitle: 'Plant Growth Prediction',
    description:
      'A two-part activity where we test out the performance of Linear Regression and Neural Networks on predicting plant growth.',
    accentColor: '#22d3ee',
    gradientFrom: '#0e7490',
    gradientTo: '#0a0a12',
    category: 'Regression',
    objectives: [
      'Predicting plant growth using temperature.',
      'Comparing Linear Regression vs Neural Network (MLP Regressor)',
      'To see which model is more suitable for predicting plant growth',
    ],
    keyFeatures: ['Regression Task', 'Linear Regression', 'Neural Network'],
    codeBlocks: [
      {
        code: `np = random.seed(42)`,
        language: 'python',
        explanation:
          'The code is to make sure we have the same values generated for both models.',
      },
      {
        code: `mae = mean_absolute_error(growth, growth_pred)\nmse = mean_squared_error(growth, growth_pred)\nrmse = np.sqrt(mse)\nr2 = r2_score(growth, growth_pred)`,
        language: 'python',
        explanation:
          'The code represents the standard evaluation metrics used for regression tasks, which will be the basis of which model is better.',
      },
      {
        code: `model = Pipeline([\n    ("scaler", StandardScaler()),\n    ("nn", MLPRegressor(\n        hidden_layer_sizes=(50, 50),\n        activation="relu",\n        solver="adam",\n        max_iter=5000,\n        random_state=42\n    ))\n])`,
        language: 'python',
        explanation:
          'The code is a pipeline that first normalizes the data using StandardScaler and then trains a Multi-layer Perceptron (MLP) neural network for regression. It also uses two hidden layers, with a ReLU activation and Adam optimization.',
      },
    ],
    screenshots: [
      { src: PG_Linear, caption: 'Linear Regression Results' },
      { src: PG_NN, caption: 'Neural Network Results' },
      { src: PG_Comparison, caption: 'Model Comparison' },
    ],
    tools: ['Python', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Google Colab'],
    challenges:
      'The NN pipeline was pretty confusing since I didn\'t know the meaning of the code inside. But I got to know them after reading the handouts and the discussions.',
    reflection:
      'It was the first activity of the course and was a jump considering from data science and statistics courses we only use linear as opposed to using neural networks. In this dataset we saw that the NN performed much better compared to the Linear Regression. We can see that more evidently using the MSE or the Mean Squared Error.',
  },
  {
    id: 'iris-classification',
    title: 'Iris Classification',
    shortTitle: 'Iris Classification',
    description:
      'A two-part activity using the Iris dataset — a small dataset commonly used in testing out different machine learning models. The kNN model was also deployed on Anvil.',
    accentColor: '#a78bfa',
    gradientFrom: '#6d28d9',
    gradientTo: '#0a0a12',
    category: 'Classification',
    objectives: [
      'Predicting species using Sepal Length, Sepal Width, Petal Length and Petal Width.',
      'Comparing kNN vs Neural Network',
      'To see which model is more suitable for predicting iris species',
      'Deploying kNN model to Anvil',
    ],
    keyFeatures: [
      'Classification Task',
      'K-Nearest Neighbors (KNN)',
      'Neural Network',
      'Anvil Deployment',
    ],
    codeBlocks: [
      {
        code: `iris = load_iris()`,
        language: 'python',
        explanation: 'Loads the Iris dataset.',
      },
      {
        code: `X = iris.data\ny = iris.target\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=4)`,
        language: 'python',
        explanation:
          'Uses train test split to split the dataset into training and testing.',
      },
      {
        code: `mlp = MLPClassifier(hidden_layer_sizes=(10,),\n                    activation='relu',\n                    solver='adam',\n                    max_iter=500,\n                    random_state=42)`,
        language: 'python',
        explanation:
          'The code uses Multi-Layer Perceptron (MLP) Classifier to predict the type of species. It has one hidden layer, with a ReLU activation and Adam optimization.',
      },
    ],
    screenshots: [
      { src: Iris_Anvil, caption: 'Anvil Deployment' },
      { src: Setosa, caption: 'Setosa Species' },
      { src: Versicolor, caption: 'Versicolor Species' },
      { src: Virginica, caption: 'Virginica Species' },
      { src: Iris_KNN, caption: 'KNN Results' },
      { src: Iris_MLP, caption: 'MLP Results' },
    ],
    tools: ['Python', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Google Colab', 'Anvil'],
    challenges:
      'Although we have used Anvil before this is the first time we had to connect it to Google Colab for it to call the code when it needs to classify based on the inputted information.',
    reflection:
      'At first look based on the accuracy they are exactly the same where we can only see the improvement of the NN on recall and F1-score this is because that MLP has a more balanced distribution among the classes. I learned that not only accuracy is important which is why we have different evaluation metrics that we should also consider.',
  },
  {
    id: 'boston-housing',
    title: 'Boston House Price Prediction',
    shortTitle: 'Boston House Price',
    description:
      'A machine learning regression project that predicts Boston house prices using selected features from the dataset. Explores neural network optimization techniques and deployment using both Anvil and Streamlit.',
    accentColor: '#60a5fa',
    gradientFrom: '#1d4ed8',
    gradientTo: '#0a0a12',
    category: 'Regression',
    objectives: [
      'Identify 3 relevant features using correlation heatmap',
      'Predicting house price based on the identified features',
      'Make a simple Neural Network model',
      'Deploying model to Anvil',
      'Improve NN model using early stopping and additional hidden layers',
      'Deploying model using Streamlit',
    ],
    keyFeatures: [
      'Regression Task',
      'Neural Network',
      'Model Training',
      'Epochs',
      'Early Stopping',
      'Hidden Layers',
      'Anvil Deployment',
      'Streamlit Deployment',
    ],
    codeBlocks: [
      {
        code: `corr = df.corr()\nplt.figure(figsize=(12,10))\nsns.heatmap(corr, cmap='coolwarm', annot=True, fmt=".2f")\nplt.title('Feature Correlation Heatmap')\nplt.show()\ncorr['price'].sort_values(ascending=False)`,
        language: 'python',
        explanation:
          'The code was used to identify the 3 features most correlated with price, which were lstat (Percentage of Lower Status Population), rm (Average Number of Rooms), and ptratio (Pupil-Teacher Ratio).',
      },
      {
        code: `history = model.fit(\n    X_train, y_train,\n    validation_split=0.2,\n    epochs=100,\n    batch_size=16,\n    verbose=1\n)`,
        language: 'python',
        explanation:
          'The code was used to check if changing the number of epochs has a better effect on the loss value.',
      },
      {
        code: `early_stop = EarlyStopping(\n    monitor='val_loss',\n    patience=10,\n    restore_best_weights=True\n)`,
        language: 'python',
        explanation: 'The code was used to introduce an early stop on training.',
      },
      {
        code: `import streamlit as st\nimport tensorflow as tf\nimport numpy as np\nimport joblib\n\nmodel = tf.keras.models.load_model("boston_model.keras")\nscaler = joblib.load("scaler.save")\n\nst.title("Boston House Price Predictor")\nst.write("Enter the features below to predict the house price.")\n\nRM = st.number_input("Average number of rooms(RM)", min_value=1.0, max_value=15.0, value=6.5, step=0.1)\nLSTAT = st.number_input("% lower status population(LSTAT)", min_value=0.0, max_value=50.0, value=12.5, step=0.1)\nPTRATIO = st.number_input("Pupil-Teacher ration (PTRATIO)", min_value=5.0, max_value=25.0, value=15.3, step=0.1)\n\nif st.button("Predict Price"):\n    features = np.array([[RM,LSTAT,PTRATIO]])\n    features_scaled = scaler.transform(features)\n    prediction = model.predict(features_scaled)\n    st.success(f"Predicted House Price: \${prediction[0][0]:.2f}k")`,
        language: 'python',
        explanation: 'The code was used to deploy the app using Streamlit.',
      },
    ],
    screenshots: [
      { src: Boston_Heatmap, caption: 'Feature Correlation Heatmap' },
      { src: Boston_MAE, caption: 'Mean Absolute Error' },
      { src: Boston_R2, caption: 'R² Score' },
      { src: Boston_Prediction, caption: 'Price Prediction' },
      { src: Boston_Training, caption: 'Model Training' },
      { src: Boston_Comparison, caption: 'Model Comparison' },
      { src: Boston_Streamlit, caption: 'Streamlit Deployment' },
    ],
    tools: [
      'NumPy', 'Matplotlib', 'Scikit-learn', 'Seaborn', 'TensorFlow',
      'JobLib', 'Google Colab', 'Anvil', 'Streamlit',
    ],
    challenges:
      'The challenges we had was determining the correct epoch, and later on the usage of early stopping and adding an additional layer. We also had to deploy it twice using Anvil and Streamlit.',
    reflection:
      'We learned about determining if additional epochs by increasing training time have actual noticeable differences on the performance of the model. And if we should include an early stopping and additional layers if these can also increase the performance. In this case the best one we had was adding the Early Stopping.',
  },
  {
    id: 'cifar10',
    title: 'CIFAR-10',
    shortTitle: 'CIFAR-10 Image Classification',
    description:
      'Exploring the CIFAR-10 dataset while training a CNN model to predict classification of images. Different ways to improve the accuracy of the model are explored, then deployed using Flask.',
    accentColor: '#f472b6',
    gradientFrom: '#9d174d',
    gradientTo: '#0a0a12',
    category: 'Computer Vision',
    objectives: [
      'CNN model training',
      'Predicting classification using Images',
      'Improving CNN Accuracy',
      'Deploying model using Flask',
    ],
    keyFeatures: [
      'Classification Task',
      'CNN Model',
      'Model Training',
      'Epochs',
      'Dropout',
      'Optimizers',
      'Learning Rates',
      'Flask Deployment',
    ],
    codeBlocks: [
      {
        code: `class_names = ['airplane', 'automobile', 'bird', 'cat', 'deer', 'dog', 'frog', 'horse', 'ship', 'truck']`,
        language: 'python',
        explanation: 'The code block is the list of class names we have inside the dataset.',
      },
      {
        code: `optimizer = tf.keras.optimizers.Adam(learning_rate=0.0005)\n\nmodel.compile(\n    loss="sparse_categorical_crossentropy",\n    optimizer=optimizer,\n    metrics=["sparse_categorical_accuracy"]\n)`,
        language: 'python',
        explanation:
          'The code block is the optimizer we used for training the model, instead of just using the default configurations of Adam.',
      },
      {
        code: `resized_img = resize(img, (32, 32))\n\nresized_img = resized_img / 255.0\n\npredictions = model.predict(resized_img)\nclass_no = np.argmax(predictions)\nprint(class_names[class_no])`,
        language: 'python',
        explanation:
          'The code resizes images to make the inputs consistent, this is a common preprocessing step used when training models.',
      },
    ],
    screenshots: [
      { src: Cifar_Initial, caption: 'Initial Model' },
      { src: Cifar_Training5, caption: 'Training at 5 Epochs' },
      { src: Cifar_Accuracy5, caption: 'Accuracy at 5 Epochs' },
      { src: Cifar_Accuracy10, caption: 'Accuracy at 10 Epochs' },
      { src: Cifar_Prediction, caption: 'Image Prediction' },
    ],
    tools: ['NumPy', 'Matplotlib', 'Scikit-learn', 'TensorFlow', 'JobLib', 'Google Colab', 'Flask'],
    challenges:
      'It was hard to understand the amount of layers we have and differentiating the usage of each such as convolutional, dropout, pooling and dense, but then again it was discussed in the discussion and handouts. We also had to deploy it any way we want and I just based it on what we used in the previous activity and just edited it to fit the model.',
    reflection:
      'We had a lot of new information introduced to us but it helped in learning the layers we have in our models. We also had to change or tune different parts of the model to make the accuracy higher, initially we had an accuracy of 0.74 but after the changes we increased it to 0.78, but the most impactful part was increasing the amount of epochs from 5 to 20.',
  },
  {
    id: 'dogs-vs-cats',
    title: 'Dogs vs Cats',
    shortTitle: 'Dogs vs Cats',
    description:
      'A model that identifies if an image is of a Dog or a Cat using a pre-trained CNN model, deployed using Flask.',
    accentColor: '#34d399',
    gradientFrom: '#065f46',
    gradientTo: '#0a0a12',
    category: 'Computer Vision',
    objectives: [
      'Predicting classification using Images',
      'Deploying model using Flask',
    ],
    keyFeatures: [
      'Classification Task',
      'CNN Model',
      'Loading Pre-Trained Model',
      'Flask Deployment',
    ],
    codeBlocks: [
      {
        code: `IMAGE_WIDTH=128\nIMAGE_HEIGHT=128\nIMAGE_SIZE=(IMAGE_WIDTH, IMAGE_HEIGHT)\nIMAGE_CHANNELS=3 # RGB color`,
        language: 'python',
        explanation: 'The code block is the constants of the image properties.',
      },
      {
        code: `model.load_weights("/content/model.h5")`,
        language: 'python',
        explanation:
          'The code shows that instead of training the model we instead used an already pretrained one.',
      },
    ],
    screenshots: [
      { src: Cat, caption: 'Cat Sample' },
      { src: Dog, caption: 'Dog Sample' },
      { src: CatDog_Prediction, caption: 'Model Prediction' },
    ],
    tools: [
      'NumPy', 'Matplotlib', 'Scikit-learn', 'TensorFlow', 'Keras',
      'Random', 'PIL', 'os', 'JobLib', 'Google Colab', 'Flask',
    ],
    challenges:
      'The only challenge we had was deploying it to Flask, since it was the first time we used it.',
    reflection:
      'The activity this time was done relatively smoothly, since we are already familiar with CNN models and we didn\'t have to wait for training since we did use a pretrained one.',
  },
  {
    id: 'sentiment-analysis',
    title: 'Sentiment Analysis',
    shortTitle: 'Sentiment Analysis',
    description:
      'Making a Recurrent Neural Network (RNN) model to accomplish sentiment analysis using IMDB reviews.',
    accentColor: '#fb923c',
    gradientFrom: '#9a3412',
    gradientTo: '#0a0a12',
    category: 'NLP',
    objectives: [
      'RNN model training',
      'Deployment using Anvil',
    ],
    keyFeatures: [
      'Sentiment Analysis',
      'RNN Model',
      'Anvil Deployment',
    ],
    codeBlocks: [
      {
        code: `model.add(\n    tf.keras.layers.Embedding(\n        input_dim=vocab_size,\n        output_dim=embed_size,\n        input_shape=(X_train.shape[1],)\n    )\n)`,
        language: 'python',
        explanation:
          'The code block is the embedding layer which converts the words into vectors that the model can understand.',
      },
      {
        code: `model.add(\n    tf.keras.layers.LSTM(\n        units=128,\n        activation='tanh'\n    )\n)`,
        language: 'python',
        explanation:
          'The code block process the sequential data and learns contextual information between words.',
      },
    ],
    screenshots: [
      { src: Positive, caption: 'Positive Sentiment' },
      { src: Negative, caption: 'Negative Sentiment' },
    ],
    tools: ['NumPy', 'TensorFlow', 'Google Colab', 'Anvil'],
    challenges:
      'The activity was pretty straight forward since I already have explored sentiment analysis in the past and have used Anvil in the past activities.',
    reflection:
      'I learned the different layers and their purposes which was shown in the code blocks earlier. Although we can really see that if a review is too complex the model can\'t quite capture the complexity of natural language, such as it can\'t capture satire or slang that can mean the opposite.',
  },
  {
    id: 'dance-recognition',
    title: 'AI-Powered Dance Recognition App',
    shortTitle: 'Dance Recognition App',
    description:
      'Following an intermediate difficulty activity from the MIT website, this app follows the movement of the user and tries to predict the position of different parts of the body and specific dance moves using AI.',
    accentColor: '#c084fc',
    gradientFrom: '#6b21a8',
    gradientTo: '#0a0a12',
    category: 'AI App',
    objectives: [
      'AI Deployment on App',
    ],
    keyFeatures: [
      'Real-Time Pose Tracking',
      'Live Skeletal Visualization',
      'Dance Scoring System',
      'Interactive Mobile Interface',
    ],
    codeBlocks: [
      {
        code: `def drawHead():\n    Canvas1.PaintColor = GREEN\n\n    if allDefined([\n        PosenetExtension1.LeftEar,\n        PosenetExtension1.RightEar\n    ]):\n\n        centerX = (\n            getX(PosenetExtension1.LeftEar) +\n            getX(PosenetExtension1.RightEar)\n        ) / 2\n\n        centerY = (\n            getY(PosenetExtension1.LeftEar) +\n            getY(PosenetExtension1.RightEar)\n        ) / 2\n\n        radius = distance(\n            PosenetExtension1.LeftEar,\n            PosenetExtension1.RightEar\n        ) / 2\n\n        Canvas1.DrawCircle(\n            centerX=centerX,\n            centerY=centerY,\n            radius=radius,\n            fill=False\n        )`,
        language: 'python',
        explanation:
          'This code is to draw the head of the person in the camera to capture and track the position of it.',
      },
    ],
    screenshots: [
      { src: Infographic, caption: 'App Infographic' },
    ],
    tools: ['MIT App Inventor', 'PoseNet', 'Artificial Intelligence', 'Computer Vision'],
    challenges:
      'The activity was easy since we used a high-level block-based visual programming.',
    reflection:
      'It was fun considering we chose a pretty fun application as it tracks the body, it also shows the potential and usage of AI in different applications in real life.',
  },
]

export default projects
